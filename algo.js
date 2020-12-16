const clstrcentr =  [7.19190141, 2.76232394, 4.1275093, 2.66845115, 1.24732069, 2.72712284];
let idsimc1 = [];
let idsimc2 = [];
let idsimc3 = [];
for(let i=0;i<bug.length;i++)
{
    let sev,pri; 
    switch(bug[i].Severity){
        case "Blocker":
            sev=8;
            break;
        case "Critical":
            sev=7;
            break;
        case "Regression":
            sev=6;
            break;
        case "Major":
            sev=5;
            break;  
        case "Normal":
            sev=4;
            break;
        case "Minor":
            sev=3;
            break;
        case "Trivial":
            sev=2;
            break;
        case "Enhancement":
            sev=1;
            break;                  
    }
    switch(bug[i].Priority){
        case "P1":
            pri=3;
            break;
        case "P2":
            pri=2;
            break;
        case "P3":
            pri=1;
            break;           
    }



    const cosinesimcluster1= (sev*clstrcentr[0] + pri*clstrcentr[1])/(Math.sqrt(sev*sev+pri*pri)*Math.sqrt(clstrcentr[0]*clstrcentr[0]+clstrcentr[1]*clstrcentr[1]))
    const cosinesimcluster2= (sev*clstrcentr[2] + pri*clstrcentr[3])/(Math.sqrt(sev*sev+pri*pri)*Math.sqrt(clstrcentr[2]*clstrcentr[2]+clstrcentr[3]*clstrcentr[3]))
    const cosinesimcluster3= (sev*clstrcentr[4] + pri*clstrcentr[5])/(Math.sqrt(sev*sev+pri*pri)*Math.sqrt(clstrcentr[4]*clstrcentr[4]+clstrcentr[5]*clstrcentr[5]))
    
    
    if (Math.max(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster1)
        {
            idsimc1.push(bug[i]);
        }
    if (Math.max(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster2)
        {
            idsimc2.push(bug[i]);
        }
    if (Math.max(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster3)
        {
            idsimc3.push(bug[i]);
        }
}