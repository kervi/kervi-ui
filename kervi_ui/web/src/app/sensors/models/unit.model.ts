
export class UnitInfo{
    public  name:string;
    public  group:string;
    public  unit:string;
    public  prefered:boolean;

    contructor(name, group, unit, preferred){
        this.name= name;
        this.group=  group;
        this.unit= unit;
        this.prefered=preferred;
    }
}



export class unitProcessor{
    public data:UnitInfo[] = []



    



    private loadData(){
        this.data.push(new UnitInfo())
    }
}