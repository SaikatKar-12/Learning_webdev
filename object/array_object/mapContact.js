const contact=new Map()
contact.set("Saikat",{
    "ph_number":77878,
    "city": "alipure"
})
contact.set("Sam",{
    "ph-number":99878,
    "city": "birati"
})
function display(name){
    if(contact.has(name)){
        let info=contact.get(name);
        console.log("Name :",name);
        console.log("ph-Number: "+info.ph_number);
        console.log("city: "+info.city);
    }
}
display("Saikat")