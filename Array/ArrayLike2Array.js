function ArrayLike2Array(m){
 let i;
 const a=m, b=Array(i=a.length);
 --i;
 while(i>-1){b[i]=a[i];--i};
 return b;
}
