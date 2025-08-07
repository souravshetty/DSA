var isIsomorphic = function(s, t) {
    let mapStoT={};
     let mapTtoS={};

     for(let i=0;i<s.length;i++){
        // push the elements into map
        if(!mapStoT[s[i]]&&!mapTtoS[t[i]]){
            mapStoT[s[i]]=t[i];
            mapTtoS[t[i]]=s[i];
        }
         else if(mapTtoS[t[i]]!==s[i]){
            return false;
        }
        else if(mapStoT[s[i]]!==t[i]){
            return false;
        }
        
     }
return true;
    }