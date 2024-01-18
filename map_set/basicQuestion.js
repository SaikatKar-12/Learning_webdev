const list=[2,4,7,8,3,1,5,8,3,1,5,7,3]
const newSet= new Set(list)
console.log(newSet)
function createMap(set,map){
    set.forEach(val=>{
        map.set(val,val*val);
    })
}
const map=new Map()
createMap(newSet,map);
map.forEach((val,key)=>{
    console.log(`${key} : ${val}`);
})