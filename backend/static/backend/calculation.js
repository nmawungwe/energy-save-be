document.addEventListener('DOMContentLoaded', function(){

   
document.querySelector('#calculator').addEventListener('click', ()=>{
    appliance_view_form()
})


energy_calculation = ()=>{

            const TVs_num = document.querySelector('#TVs_num').value;
            const Decoders_num = document.querySelector('#Decoders_num').value;
            const SoundSystems_num= document.querySelector('#SoundSystems_num').value;
            const Lights_num = document.querySelector('#Lights_num').value;
            const Heaters_num = document.querySelector('#Heaters_num').value;
            const Stoves_num = document.querySelector('#Stoves_num').value;
            const Fridges_num = document.querySelector('#Fridges_num').value;
            const Kettles_num = document.querySelector('#Kettles_num').value;
            const Microwaves_num= document.querySelector('#Microwaves_num').value;
            const Computers_num = document.querySelector('#Computers_num').value;
            const Printers_num= document.querySelector('#Printers_num').value;
            const Modems_num= document.querySelector('#Modems_num').value;
            const ElectricBlankets_num = document.querySelector('#ElectricBlankets_num').value;
            const Phones_num = document.querySelector('#Phones_num').value;
            let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


                        // usage values in kWh per day
            let TV_usage = 0.72
            let Decoder_usage = 0.72
            let Sound_system = 0.6
            let Light = 0.16
            let Heater = 0.026
            let Stove = 2
            let Fridge = 9.6
            let Kettle = 0.333
            let Microwave = 0.257
            let Computer = 0.24
            let Printer = 0.005
            let Modem = 0.288
            let Electric_blanket = 0.015
            let Phone = 0.12

            //per day
            total_usage = (TVs_num*TV_usage)+(Decoders_num*Decoder_usage)+(SoundSystems_num*Sound_system)+(Lights_num*Light)+(Heaters_num*Heater)+(Stoves_num*Stove)+(Fridges_num*Fridge)+(Kettles_num*Kettle)+(Microwaves_num*Microwave)+(Computers_num*Computer)+(Printers_num*Printer)+(Modems_num*Modem)+(ElectricBlankets_num*Electric_blanket)+(Phones_num*Phone)
            console.log(total_usage)

 
            if (total_usage > 7.75) {
                            //scare the shit out of them
                            result_view()
                                let btn_recalculate = document.createElement("BUTTON")
                                btn_recalculate.setAttribute("class", "btn btn-light btn_recalc")
                                btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
                                document.querySelector('#result').appendChild(btn_recalculate)
                                let btn_notification = document.createElement("BUTTON")
                                btn_notification.setAttribute("class", "btn btn-danger")
                                btn_notification.innerHTML = `You are above average consumption: ${total_usage} kWh`
                                document.querySelector('#result').appendChild(btn_notification) 
                                let btn_save = document.createElement("BUTTON")
                                btn_save.setAttribute('class','btn btn-info btn_save')
                                btn_save.innerHTML =`Save appliance list`
                                document.querySelector('#result').appendChild(btn_save)
                                document.querySelector('.btn_recalc').addEventListener('click', ()=>{
                                    appliance_view_form()
                                })
                                document.querySelector('.btn_save').addEventListener('click', ()=>{
                                    appliance_list_check()
                                })                               

                        } else if (4.65 <= total_usage && total_usage <= 7.75) {
                            // tell them something nice
                            result_view()
                            let btn_recalculate = document.createElement("BUTTON")
                            btn_recalculate.setAttribute("class", "btn btn-light btn_recalc")
                            btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
                            document.querySelector('#result').appendChild(btn_recalculate)
                            let btn_notification = document.createElement("BUTTON")
                            btn_notification.setAttribute("class", "btn btn-warning")
                            btn_notification.innerHTML = `You are average consumption: ${total_usage} kWh`
                            document.querySelector('#result').appendChild(btn_notification)
                            let btn_save = document.createElement("BUTTON")
                            btn_save.setAttribute('class','btn btn-info btn_save')
                            btn_save.innerHTML =`Save appliance list`
                            document.querySelector('#result').appendChild(btn_save)
                            document.querySelector('.btn_recalc').addEventListener('click', ()=>{
                                appliance_view_form()
                            })
                            document.querySelector('.btn_save').addEventListener('click', ()=>{
                                appliance_list_check()
                            })
                        } else {
                            //suck their nuts
                            result_view()
                            let btn_recalculate = document.createElement("BUTTON")
                            btn_recalculate.setAttribute("class", "btn btn-light btn_recalc")
                            btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
                            document.querySelector('#result').appendChild(btn_recalculate)
                            let btn_notification = document.createElement("BUTTON")
                            btn_notification.setAttribute("class", "btn btn-success")
                            btn_notification.innerHTML = `You are below average consumption: ${total_usage}kWh`
                            document.querySelector('#result').appendChild(btn_notification)
                            let btn_save =document.createElement("BUTTON")
                            btn_save.setAttribute("class", "btn btn-info btn_save")
                            btn_save.innerHTML = `Save appliance list`
                            document.querySelector('#result').appendChild(btn_save)
                            document.querySelector('.btn_recalc').addEventListener('click', ()=>{
                                appliance_view_form()   
                            })
                            document.querySelector('.btn_save').addEventListener('click', ()=>{
                                appliance_list_check()
                            })
                        }

    // appliance_list_check = ()=> {
  
    //     const user_id = JSON.parse(document.getElementById('user_id').textContent)
            
    //     fetch(`/appliances`).then(response=> response.json()).then(appliance_list =>{
    //         console.log(appliance_list)
        
    //     if (user_id === appliance_list.user_id) {
    //         console.log('User exists, you should suggest if they want to update they appliance list')
    //         }
    //     else{
    //         console.log('User can save their appliance list')
    //     }


    // })}
        
    save_appliance_list = ()=> {
        let request = new Request(
            '/appliances',
            {headers: {'X-CSRFToken': csrftoken}}
        );
        fetch(request, {
            method: 'POST',
            body: JSON.stringify({
                TVs_num: TVs_num,
                Decoders_num: Decoders_num,
                SoundSystems_num: SoundSystems_num,
                Lights_num: Lights_num,
                Heaters_num: Heaters_num,
                Stoves_num : Stoves_num,
                Fridges_num: Fridges_num,
                Kettles_num: Kettles_num,
                Microwaves_num: Microwaves_num,
                Computers_num: Computers_num,
                Printers_num: Printers_num,
                Modems_num: Modems_num,
                ElectricBlankets_num: ElectricBlankets_num,
                Phones_num: Phones_num
            })
        }).then(response => response.json()).then(result=>{
            console.log(result)
        })
        return false;
    }


    appliance_list_check = ()=> {
        const user_id = JSON.parse(document.getElementById('user_id').textContent)
            
        fetch(`/appliances`).then(response=> response.json()).then(appliance_list =>{
            // console.log(appliance_list)
        
        if (user_id === appliance_list.user_id) {
            update_view()
            let result_msg = document.createElement("P")
            result_msg.innerText = `You have a saved appliance list do you want to update it?`
            document.querySelector('#update_msg').appendChild(result_msg)
            let btn_update = document.createElement("BUTTON")
            // btn_recalculate.setAttribute("class", "btn btn-light btn_recalc")
            // btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
            // document.querySelector('#result').appendChild(btn_recalculate)
            btn_update.setAttribute("class","btn btn-primary btn_update" )
            btn_update.setAttribute('onclick', 'appliance_update_list()')
            btn_update.innerHTML = `Yes`
            document.querySelector('#update').appendChild(btn_update)
            let btn_cancel = document.createElement("BUTTON")
            btn_cancel.setAttribute('class','btn btn-danger btn_cancel')
            btn_cancel.setAttribute('onclick','appliance_view_form()')
            btn_cancel.innerHTML = `No`
            document.querySelector('#update').appendChild(btn_cancel)
            }
        else {
            update_view()
            save_appliance_list()
        }
    
    })}

    
    appliance_update_list = ()=> {
        let request = new Request(
            '/appliances',
            {headers: {'X-CSRFToken': csrftoken}}
        );
        fetch(request, {
            method: 'PUT',
            body: JSON.stringify({
                TVs_num: TVs_num,
                Decoders_num: Decoders_num,
                SoundSystems_num: SoundSystems_num,
                Lights_num: Lights_num,
                Heaters_num: Heaters_num,
                Stoves_num : Stoves_num,
                Fridges_num: Fridges_num,
                Kettles_num: Kettles_num,
                Microwaves_num: Microwaves_num,
                Computers_num: Computers_num,
                Printers_num: Printers_num,
                Modems_num: Modems_num,
                ElectricBlankets_num: ElectricBlankets_num,
                Phones_num: Phones_num
            })
        }).then(response => response.json()).then(result=>{
            console.log(result)
            return false;
        })
        appliance_view_form() 
    }
      
}




 
document.querySelector('#appliance_list').addEventListener('click', ()=>{

               fetch(`/appliances`).then(response=> response.json()).then(appliance_list =>{
                if (appliance_list.Message==="Appliance list doesn't exist") {
                    redirect_view()
                    let btn_redirect = document.createElement("BUTTON")
                    let msg_redirect = document.createElement("P")
                    msg_redirect.innerText = `Welcome! You have no saved appliance list. Click the button below`
                    btn_redirect.setAttribute('class', 'btn btn-info btn_redirect')
                    btn_redirect.innerHTML=`Input`
                    document.querySelector('#redirection_view').appendChild(msg_redirect)
                    document.querySelector('#redirection_view').appendChild(btn_redirect)
                    document.querySelector('.btn_redirect').addEventListener('click', ()=>{
                    appliance_view_form()
                    })
                } else {
                appliance_view_list()
                // usage values in kWh per day
                // console.log(appliance_list)
                let TV_usage = 0.72
                let Decoder_usage = 0.72
                let Sound_system = 0.6
                let Light = 0.16
                let Heater = 0.026
                let Stove = 2
                let Fridge = 9.6
                let Kettle = 0.333
                let Microwave = 0.257
                let Computer = 0.24
                let Printer = 0.005
                let Modem = 0.288
                let Electric_blanket = 0.015
                let Phone = 0.12
                 //per day
                total_usage = (appliance_list.TVs_num*TV_usage)+(appliance_list.Decoders_num*Decoder_usage)
                +(appliance_list.SoundSystems_num*Sound_system)
                +(appliance_list.Lights_num*Light)
                +(appliance_list.Heaters_num*Heater)
                +(appliance_list.Stoves_num*Stove)
                +(appliance_list.Fridges_num*Fridge)
                +(appliance_list.Kettles_num*Kettle)
                +(appliance_list.Microwaves_num*Microwave)
                +(appliance_list.Computers_num*Computer)
                +(appliance_list.Printers_num*Printer)
                +(appliance_list.Modems_num*Modem)
                +(appliance_list.ElectricBlankets_num*Electric_blanket)+(appliance_list.Phones_num*Phone)
                // console.log(total_usage)

                if (total_usage > 7.75) {
                    let load_msg = document.createElement("P")
                    load_msg.innerText = `Above average consumption`
                    let btn_load = document.createElement("BUTTON")
                    btn_load.setAttribute("class", "btn btn-danger")
                    btn_load.innerHTML = `${total_usage} kWh/d`
                    document.querySelector('#current_load').appendChild(load_msg)
                    document.querySelector('#current_load').appendChild(btn_load)
                } else if (4.65 <= total_usage && total_usage <= 7.75) {
                    let load_msg = document.createElement("P")
                    load_msg.innerText = `Average consumption`
                    let btn_load = document.createElement("BUTTON")
                    btn_load.setAttribute("class", "btn btn-warning")
                    btn_load.innerHTML = `${total_usage} kWh/d`
                    document.querySelector('#current_load').appendChild(load_msg)
                    document.querySelector('#current_load').appendChild(btn_load)
                } else {
                    let load_msg = document.createElement("P")
                    load_msg.innerText = `Below average consumption`
                    let btn_load = document.createElement("BUTTON")
                    btn_load.setAttribute("class", "btn btn-success")
                    btn_load.innerHTML = `${total_usage} kWh/d`
                    document.querySelector('#current_load').appendChild(load_msg)
                    document.querySelector('#current_load').appendChild(btn_load)
                }

                let btn_edit = document.createElement("BUTTON")
                btn_edit.setAttribute("class","btn btn-info btn_edit d-flex justify-content-center")
                btn_edit.innerHTML = `Edit`
                document.querySelector('#edit_load').appendChild(btn_edit)

                document.querySelector('.btn_edit').addEventListener('click', ()=>{

                    appliance_view_form()
                    document.querySelector('#TVs_num').value=`${appliance_list.TVs_num}`
                    document.querySelector('#Decoders_num').value=`${appliance_list.Decoders_num}`
                    document.querySelector('#SoundSystems_num').value=`${appliance_list.SoundSystems_num}`
                    document.querySelector('#Lights_num').value=`${appliance_list.Lights_num}`
                    document.querySelector('#Heaters_num').value=`${appliance_list.Heaters_num}`
                    document.querySelector('#Stoves_num').value=`${appliance_list.Stoves_num}`
                    document.querySelector('#Fridges_num').value=`${appliance_list.Fridges_num}`
                    document.querySelector('#Kettles_num').value=`${appliance_list.Kettles_num}`
                    document.querySelector('#Microwaves_num').value=`${appliance_list.Microwaves_num}`
                    document.querySelector('#Computers_num').value=`${appliance_list.Computers_num}`
                    document.querySelector('#Printers_num').value=`${appliance_list.Printers_num}`
                    document.querySelector('#Modems_num').value=`${appliance_list.Modems_num}`
                    document.querySelector('#ElectricBlankets_num').value=`${appliance_list.ElectricBlankets_num}`
                    document.querySelector('#Phones_num').value=`${appliance_list.Phones_num}`


                })

                document.querySelector('.TVs_num').innerHTML=`TVs number: ${appliance_list.TVs_num}`,
                document.querySelector('.Decoders_num').innerHTML=`Decoders number: ${appliance_list.Decoders_num}`,
                document.querySelector('.SoundSystems_num').innerHTML=`SoundSystems number: ${appliance_list.SoundSystems_num}`,
                document.querySelector('.Lights_num').innerHTML=`Lights number: ${appliance_list.Lights_num}`,
                document.querySelector('.Heaters_num').innerHTML=`Heaters number: ${appliance_list.Heaters_num}`,
                document.querySelector('.Stoves_num').innerHTML=`Stoves number:${appliance_list.Stoves_num}`,
                document.querySelector('.Fridges_num').innerHTML=`Fridges number: ${appliance_list.Fridges_num}`,
                document.querySelector('.Kettles_num').innerHTML=`Kettles number: ${appliance_list.Kettles_num}`,
                document.querySelector('.Microwaves_num').innerHTML=`Microwaves number: ${appliance_list.Microwaves_num}`,
                document.querySelector('.Computers_num').innerHTML=`Computers number: ${appliance_list.Computers_num}`,
                document.querySelector('.Printers_num').innerHTML=`Printers number: ${appliance_list.Printers_num}`,
                document.querySelector('.Modems_num').innerHTML=`Modems number: ${appliance_list. Modems_num}`,
                document.querySelector('.ElectricBlankets_num').innerHTML=`ElectricBlankets number: ${appliance_list.ElectricBlankets_num}`,
                document.querySelector('.Phones_num').innerHTML=`Phones number: ${appliance_list.Phones_num}`
                }

            })
        

 
    
})



        // appliance_view_form(
        //     document.querySelector('form').onsubmit = function(){
    
        //         const TVs_num = document.querySelector('#TVs_num').value;
        //         const Decoders_num = document.querySelector('#Decoders_num').value;
        //         const SoundSystems_num= document.querySelector('#SoundSystems_num').value;
        //         const Lights_num = document.querySelector('#Lights_num').value;
        //         const Heaters_num = document.querySelector('#Heaters_num').value;
        //         const Stoves_num = document.querySelector('#Stoves_num').value;
        //         const Fridges_num = document.querySelector('#Fridges_num').value;
        //         const Kettles_num = document.querySelector('#Kettles_num').value;
        //         const Microwaves_num= document.querySelector('#Microwaves_num').value;
        //         const Computers_num = document.querySelector('#Computers_num').value;
        //         const Printers_num= document.querySelector('#Printers_num').value;
        //         const Modems_num= document.querySelector('#Modems_num').value;
        //         const ElectricBlankets_num = document.querySelector('#ElectricBlankets_num').value;
        //         const Phones_num = document.querySelector('#Phones_num').value;
        //         let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                
        //                     // usage values in kWh per day
        //         let TV_usage = 0.72
        //         let Decoder_usage = 0.72
        //         let Sound_system = 0.6
        //         let Light = 0.16
        //         let Heater = 0.026
        //         let Stove = 2
        //         let Fridge = 9.6
        //         let Kettle = 0.333
        //         let Microwave = 0.257
        //         let Computer = 0.24
        //         let Printer = 0.005
        //         let Modem = 0.288
        //         let Electric_blanket = 0.015
        //         let Phone = 0.12

        //         //per day
        //         total_usage = (TVs_num*TV_usage)+(Decoders_num*Decoder_usage)+(SoundSystems_num*Sound_system)+(Lights_num*Light)+(Heaters_num*Heater)+(Stoves_num*Stove)+(Fridges_num*Fridge)+(Kettles_num*Kettle)+(Microwaves_num*Microwave)+(Computers_num*Computer)+(Printers_num*Printer)+(Modems_num*Modem)+(ElectricBlankets_num*Electric_blanket)+(Phones_num*Phone)
        //         console.log(total_usage)

        //         if (total_usage > 7.75) {
        //             //scare the shit out of them
        //             let btn_recalculate = document.createElement("BUTTON")
        //             btn_recalculate.setAttribute("class", "btn btn-light")
        //             btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
        //             btn_recalculate.setAttribute('onclick','recalculate_view ()')
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-danger")
        //             btn_notification.innerHTML = `You are above average consumption: ${total_usage} kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
        //             document.querySelector('#result').appendChild(btn_recalculate)
    
        //         } else if (4.65 <= total_usage && total_usage <= 7.75 ) {
        //             // tell them something nice
        //             let btn_recalculate = document.createElement("BUTTON")
        //             btn_recalculate.setAttribute("class", "btn btn-light recalculate")
        //             btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-warning")
        //             btn_notification.innerHTML = `You are average consumption: ${total_usage} kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
        //             document.querySelector('#result').appendChild(btn_recalculate)
        //         } else {
        //             //suck their nuts
        //             let btn_recalculate = document.createElement("BUTTON")
        //             btn_recalculate.setAttribute("class", "btn btn-light recalculate")
        //             btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-success recalculate")
        //             btn_notification.innerHTML = `You are below average consumption: ${total_usage}kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
        //             document.querySelector('#result').appendChild(btn_recalculate)
        //         }

        //         recalculate_view = ()=> {
        //             appliance_view_form(
        //                 document.querySelector('#form_inputs').innerHTML=`
        //                     <div class="form-group">
        //                     <label for="TVs_num">Number of Tvs</label>
        //                     <input type="number" id="TVs_num" placeholder="Number of Tvs" >
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Decoders</label>
        //                     <input type="number" id="Decoders_num" placeholder="Number of Decoders" > 
        //                 </div>           
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Sound Systems</label>
        //                     <input type="number" id="SoundSystems_num" placeholder="Number of SoundSystems">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Lights</label>
        //                     <input type="number" id="Lights_num" placeholder="Number of Lights">   
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Heaters</label>
        //                     <input type="number" id="Heaters_num" placeholder="Number of Heaters"> 
        //                 </div>   
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Stoves</label>
        //                     <input type="number" id="Stoves_num" placeholder="Number of Stoves">
        //                 </div>  
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Fridges</label>
        //                     <input type="number" id="Fridges_num" placeholder="Number of Fridges">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Kettles</label>
        //                     <input type="number" id="Kettles_num" placeholder="Number of Kettles"> 
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Microwave</label>
        //                     <input type="number" id="Microwaves_num" placeholder="Number of Microwaves">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Computers</label>
        //                     <input type="number" id="Computers_num" placeholder="Number of Computers"> 
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Printers</label>
        //                     <input type="number" id="Printers_num" placeholder="Number of Printers">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Modems</label>
        //                     <input type="number" id="Modems_num" placeholder="Number of Modems">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Electric Blankets</label>
        //                     <input type="number" id="ElectricBlankets_num" placeholder="Number of Electric Blankets">
        //                 </div>
        //                 <div class="form-group">
        //                     <label for="TVs_num">Number of Phones</label>
        //                     <input type="number" id="Phones_num" placeholder="Number of Phones">
        //                 </div>
        //                 <br>
        //                  <div>
        //                     <button type="submit" class="btn btn-primary">Calculate</button>
        //                  </div>`    
        //                 )
        //         }



        //         document.querySelector('#form_inputs').innerHTML=''
        //         let request = new Request(
        //             '/appliances',
        //             {headers: {'X-CSRFToken': csrftoken}}
        //         );
        //         fetch(request, {
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 TVs_num: TVs_num,
        //                 Decoders_num: Decoders_num,
        //                 SoundSystems_num: SoundSystems_num,
        //                 Lights_num: Lights_num,
        //                 Heaters_num: Heaters_num,
        //                 Stoves_num : Stoves_num,
        //                 Fridges_num: Fridges_num,
        //                 Kettles_num: Kettles_num,
        //                 Microwaves_num: Microwaves_num,
        //                 Computers_num: Computers_num,
        //                 Printers_num: Printers_num,
        //                 Modems_num: Modems_num,
        //                 ElectricBlankets_num: ElectricBlankets_num,
        //                 Phones_num: Phones_num
        //             })
        //         }).then(response => response.json()).then(result=>{
        //             console.log(result)
        //         })
        //         return false;
        //     })







        // home_page_calc = ()=>{




        // }









appliance_view_form(
    document.querySelector('#calculate').addEventListener('click', ()=>{
        energy_calculation()  
    })
)
})

function appliance_view_form(){
    //showing the appliances entry form


    document.querySelector('#TVs_num').value=''
    document.querySelector('#Decoders_num').value=''
    document.querySelector('#SoundSystems_num').value=''
    document.querySelector('#Lights_num').value=''
    document.querySelector('#Heaters_num').value=''
    document.querySelector('#Stoves_num').value=''
    document.querySelector('#Fridges_num').value=''
    document.querySelector('#Kettles_num').value=''
    document.querySelector('#Microwaves_num').value=''
    document.querySelector('#Computers_num').value=''
    document.querySelector('#Printers_num').value=''
    document.querySelector('#Modems_num').value=''
    document.querySelector('#ElectricBlankets_num').value=''
    document.querySelector('#Phones_num').value=''






    document.querySelector('#appliance_view_form').style.display = 'block';
    document.querySelector('#appliance_view_list').style.display = 'none';
    document.querySelector('#home_view').style.display = 'none';
    document.querySelector('#results_view').style.display = 'none'
    document.querySelector('#redirection_view').style.display = 'none'
    document.querySelector('#update_view').style.display = 'none'
    
}

function appliance_view_list(){
    //showing the appliances list view 
    document.querySelector('#appliance_view_form').style.display = 'none';
    document.querySelector('#appliance_view_list').style.display = 'block';
    document.querySelector('#home_view').style.display = 'none';
    document.querySelector('#results_view').style.display = 'none'
    document.querySelector('#redirection_view').style.display = 'none'
    document.querySelector('#update_view').style.display = 'none'
    document.querySelector('#current_load').innerHTML=''
    document.querySelector('#edit_load').innerHTML=''

    document.querySelector('.TVs_num').innerHTML=''
    document.querySelector('.Decoders_num').innerHTML=''
    document.querySelector('.SoundSystems_num').innerHTML=''
    document.querySelector('.Lights_num').innerHTML=''
    document.querySelector('.Heaters_num').innerHTML=''
    document.querySelector('.Stoves_num').innerHTML=''
    document.querySelector('.Fridges_num').innerHTML=''
    document.querySelector('.Kettles_num').innerHTML=''
    document.querySelector('.Microwaves_num').innerHTML=''
    document.querySelector('.Computers_num').innerHTML=''
    document.querySelector('.Printers_num').innerHTML=''
    document.querySelector('.Modems_num').innerHTML=''
    document.querySelector('.ElectricBlankets_num').innerHTML=''
    document.querySelector('.Phones_num').innerHTML=''

}

function home_view(){
    //showing the appliances entry form
    document.querySelector('#appliance_view_form').style.display = 'none';
    document.querySelector('#appliance_view_list').style.display = 'none';
    document.querySelector('#home_view').style.display = 'block';
    document.querySelector('#results_view').style.display = 'none'
    document.querySelector('#redirection_view').style.display = 'none'
    document.querySelector('#update_view').style.display = 'none'
}

function result_view(){
        //showing the appliances energy demand results
        document.querySelector('#appliance_view_form').style.display = 'none';
        document.querySelector('#appliance_view_list').style.display = 'none';
        document.querySelector('#home_view').style.display = 'none';
        document.querySelector('#results_view').style.display = 'block'
        document.querySelector('#redirection_view').style.display = 'none'
        document.querySelector('#update_view').style.display = 'none'
        document.querySelector('#result').innerHTML=''
}

function redirect_view(){

            //showing the redirection view for appliance form
            document.querySelector('#appliance_view_form').style.display = 'none';
            document.querySelector('#appliance_view_list').style.display = 'none';
            document.querySelector('#home_view').style.display = 'none';
            document.querySelector('#results_view').style.display = 'none'
            document.querySelector('#redirection_view').style.display = 'block'
            document.querySelector('#update_view').style.display = 'none'

            document.querySelector('#redirection_view').innerHTML=''

}

function update_view(){

    //showing the redirection view for appliance form
    document.querySelector('#appliance_view_form').style.display = 'none';
    document.querySelector('#appliance_view_list').style.display = 'none';
    document.querySelector('#home_view').style.display = 'none';
    document.querySelector('#results_view').style.display = 'none'
    document.querySelector('#redirection_view').style.display = 'none'
    document.querySelector('#update_view').style.display = 'block'

    document.querySelector('#update_msg').innerHTML=''
    document.querySelector('#update').innerHTML=''

}