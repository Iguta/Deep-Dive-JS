function inventoryList(){
    return {
        items:[],
        add:function(item){
            if(this.items.includes(item)){
                return;
            }
            this.items.push(item);
        },
        remove:function(item){
            const indexOfItem = this.items.indexOf(item);
            if(indexOfItem>-1){
                this.items.splice(indexOfItem, 1);
            }
        },
        getList:function(){
            return this.items;
        }
    }
}
const newObj = new inventoryList();
newObj.add("Dashboard");
newObj.add("Windscreen");
newObj.add("Side Mirrors");
newObj.add("Engine");
//newObj.remove("Side Mirrors");

console.log(newObj.getList());