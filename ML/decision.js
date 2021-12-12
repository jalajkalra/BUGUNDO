module.exports = (bugs)=> {
    let idsimc1 = [];
    let idsimc2 = [];
    let idsimc3 = [];
    if(bugs.length>0){
        const clstrcentr =  [4.87051282, 10.0, 4.02970297, 5.0, 3.72836418, 1];
        for(let i=0;i<bugs.length;i++)
        {
            let sev,pri; 
            switch(bugs[i].Severity){
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
            switch(bugs[i].Priority){
                case "P1":
                    pri=10;
                    break;
                case "P2":
                    pri=5;
                    break;
                case "P3":
                    pri=1;
                    break;           
            }
            const a = sev*pri;
            if (a>=50&&a<=80)
                {
                    idsimc1.push(bugs[i]);
                }
            if (a<50&&a>=20)
                {
                    idsimc2.push(bugs[i]);
                }
            if (a<=20)
                {
                    idsimc3.push(bugs[i]);
                }
        }
    }
    return {idsimc1,idsimc2,idsimc3};
}