#include<bits/stdc++.h>
using namespace std;

template<typename T>
void print(vector<T> v)
{
    for(int i = 1; i < v.size(); i++)
        cout << v[i] << ", ";
    cout<<endl;
}

int giveSum(string s, char c)
{
    int sum=0;
    vector <string> tokens;
    vector<int> negatives;
    stringstream check1(s);

    string intermediate;
    
    while(getline(check1, intermediate, c))
    {
            tokens.push_back(intermediate);
    }
    
    for(int i=1;i<tokens.size();i++)
    {
        if(stoi(tokens[i])>=0)
            sum+= stoi(tokens[i]);
        else
        {
            negatives.push_back(stoi(tokens[i]));
        }
    }

    if(negatives.size()!=0)
    {
        sum=-1;
        cout<<"Negatives not allowed !\n";
        print(negatives);
    }
    return sum;
}

int Add(string s)
{
   
    regex r1("(//[;,-]\n)((-)?([0-9]+)([;,-]))*(-)?([0-9]+)");
    regex r2("(((-)?[0-9]+)([,]))*(-)?([0-9]+)");
    
    if ( regex_match(s,r1) )
    {
        return giveSum(s,s[2]);
    }
    else if(regex_match(s,r2))
    {
        int sum=0;
        vector <string> tokens;
        vector<int> negatives;
        stringstream check1(s);
    
        string intermediate;
        
        while(getline(check1, intermediate, ','))
        {
                tokens.push_back(intermediate);
        }
        
        for(int i=0;i<tokens.size();i++)
        {
            if(stoi(tokens[i])>=0)
                sum+= stoi(tokens[i]);
            else
            {
                negatives.push_back(stoi(tokens[i]));
            }
        }

        if(negatives.size()!=0)
        {
            sum=-1;
            cout<<"Negatives not allowed !\n";
            print(negatives);
        }

        return sum;
    }
    else
    {
        cout<<"Invalid !\n";
        return -1;
    }
}

int main()
{
    string s1,s2;
    int answer;
    cin>>s1;
    if(s1[0]=='/' && s1[1]=='/')
    {
        cin>>s2;
        answer=Add(s1+"\n"+s2);
    }
    else
        answer=Add(s1);

    if(answer!=-1)
        cout<<answer<<endl;
    return 0;
}