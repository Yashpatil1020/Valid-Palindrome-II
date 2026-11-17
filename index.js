var validPalindrome = function(s) {
    let left=0, right=s.length-1;
    while(left<right){
        if(s.charAt(left)!=s.charAt(right)){
            return isPalidrone(s,left+1,right) || isPalidrone(s, left,right-1);
        }
        left++;
        right--;
    }
    return true;
};
var isPalidrone=function(s,left,right){
    while(left<right){
        if(s.charAt(left)!=s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};