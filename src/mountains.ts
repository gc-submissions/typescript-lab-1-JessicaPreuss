export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain [] = [{
    name: "Kilimanjaro",
    height: 19341
},{
    name: "Everest",
    height: 29029
},{
    name: "Denali",
    height: 20310
}]

export let findNameOfTallestMountain = (anArrayOfMountainObjects: Mountain []): string => {
    let tallestMountainHeight:number = 0; 
    let tallestMountainName:string = "";

    for (let i:number=0; i < anArrayOfMountainObjects.length; i++) {
        if (anArrayOfMountainObjects[i].height > tallestMountainHeight){
            tallestMountainHeight = anArrayOfMountainObjects[i].height;
            tallestMountainName = anArrayOfMountainObjects[i].name;
        }
    }

    return  tallestMountainName; //name of the tallest mountain
}

let findNameOfTallestMountainResult:string =  findNameOfTallestMountain(mountains);
console.log("find name of the tallest mountain: ",findNameOfTallestMountainResult);

