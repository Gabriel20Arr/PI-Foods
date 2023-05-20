import React, {useState} from 'react';

export default function Step({cantidad,steps,id}) {

    const [stepx,setStepx]=useState({
        id:id,
        step:'',
        ingredients:[],
        equipments: []
    })
    const [eqIn,setEqIn]=useState({
        ingredient:'',
        equipment:''
    });
    const [click,setClick]=useState(0);

    const handlerChangeStep = (e)=>{
        const {value}=e.target;
        setStepx({...stepx,step:value})
    }
    const addEqipOrIng =(e)=>{
        const {value,name}=e.target;
        setEqIn({...eqIn,[name]:value})
    };
    const addEqipment = (e)=>{
        console.log(e);
        e.preventDefault();
        setStepx({...stepx,equipments:[...stepx.equipments,eqIn.equipment]});
        setEqIn({...eqIn,
            equipment:''
        })
        
    };
    const addIngredint = (e)=>{
        e.preventDefault();
        console.log(eqIn);
        setStepx({...stepx,ingredients:[...stepx.ingredients,eqIn.ingredient]});
        setEqIn({...eqIn,
            ingredient:''
        })
    };
    const addStep = (e)=>{
        e.preventDefault();
        steps(stepx);
        setClick(1);
        setStepx({
            id:id,
            step:'',
            ingredients:[],
            equipments: []
        });
    };

    

  return (
    <div >
      <input type="text" onChange={handlerChangeStep} value={stepx.step}/>
        <div>
            <label htmlFor="">Equipment: </label>
            <input type="text" onChange={addEqipOrIng} name='equipment' value={eqIn.equipment}/>
            <button onClick={(e)=>addEqipment(e)} >add</button>
        </div>
        <div>
            <label htmlFor="">Ingredienet: </label>
            <input type="text" onChange={addEqipOrIng} name='ingredient' value={eqIn.ingredient}/>
            <button type='submit' onClick={addIngredint} >add</button>
        </div>
            
        {click||!stepx.step?null:<button onClick={addStep}>Listo</button>}
    </div>
  )
}
 