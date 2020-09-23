document.addEventListener('DOMContentLoaded', function(){

    // document.querySelector('#check').addEventListener('click', ()=>{

    //     const user_id = JSON.parse(document.getElementById('user_id').textContent)

    //     fetch(`/appliances`).then(response=> response.json()).then(appliance_list =>{
    //         console.log(appliance_list)
        
        // if (user_id === appliance_list.user_id) {
        //     appliance_view_list(
        //         document.querySelector('.TVs_num').innerHTML=`<p>${appliance_list.TVs_num}</p>`,
        //         document.querySelector('.Decoders_num').innerHTML=`<p>${appliance_list.Decoders_num}</p>`,
        //         document.querySelector('.SoundSystems_num').innerHTML=`<p>${appliance_list.SoundSystems_num}</p>`,
        //         document.querySelector('.Lights_num').innerHTML=`<p>${appliance_list.Lights_num}</p>`,
        //         document.querySelector('.Heaters_num').innerHTML=`<p>${appliance_list.Heaters_num}</p>`,
        //         document.querySelector('.Stoves_num').innerHTML=`<p>${appliance_list.Stoves_num}</p>`,
        //         document.querySelector('.Fridges_num').innerHTML=`<p>${appliance_list.Fridges_num}</p>`,
        //         document.querySelector('.Kettles_num').innerHTML=`<p>${appliance_list.Kettles_num}</p>`,
        //         document.querySelector('.Microwaves_num').innerHTML=`<p>${appliance_list.Microwaves_num}</p>`,
        //         document.querySelector('.Computers_num').innerHTML=`<p>${appliance_list.Computers_num}</p>`,
        //         document.querySelector('.Printers_num').innerHTML=`<p>${appliance_list.Printers_num}</p>`,
        //         document.querySelector('.Modems_num').innerHTML=`<p>${appliance_list. Modems_num}</p>`,
        //         document.querySelector('.ElectricBlankets_num').innerHTML=`<p>${appliance_list.ElectricBlankets_num}</p>`,
        //         document.querySelector('.Phones_num').innerHTML=`<p>${appliance_list.Phones_num}</p>`,
        //     )
        // } else {
        //     appliance_view_form(
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
        //             document.querySelector('#result').appendChild(btn_recalculate)
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-danger")
        //             btn_notification.innerHTML = `You are above average consumption: ${total_usage} kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
    
        //         } else if (4.65 <= total_usage <= 7.75 ) {
        //             // tell them something nice
        //             let btn_recalculate = document.createElement("BUTTON")
        //             btn_recalculate.setAttribute("class", "btn btn-light")
        //             btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
        //             document.querySelector('#result').appendChild(btn_recalculate)
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-warning")
        //             btn_notification.innerHTML = `You are average consumption: ${total_usage} kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
        //         } else {
        //             //suck their nuts
        //             let btn_recalculate = document.createElement("BUTTON")
        //             btn_recalculate.setAttribute("class", "btn btn-light")
        //             btn_recalculate.innerHTML = `Do you want to recalculate consumption?`
        //             document.querySelector('#result').appendChild(btn_recalculate)
        //             let btn_notification = document.createElement("BUTTON")
        //             btn_notification.setAttribute("class", "btn btn-success")
        //             btn_notification.innerHTML = `You are below average consumption: ${total_usage}kWh`
        //             document.querySelector('#result').appendChild(btn_notification)
        //         }

        //         document.querySelector('#appliance_form').innerHTML=''
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
        //     },
        //     )
        // }

document.querySelector('#check').addEventListener('click', ()=>{
    energy_calculation()
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
    document.querySelector('#appliance_view_form').style.display = 'block';
    document.querySelector('#appliance_view_list').style.display = 'none';
    document.querySelector('#home_view').style.display = 'none';
}

function appliance_view_list(){
    //showing the appliances list view 
    document.querySelector('#appliance_view_form').style.display = 'none';
    document.querySelector('#appliance_view_list').style.display = 'block';
    document.querySelector('#home_view').style.display = 'none';
}

function home_view(){
    //showing the appliances entry form
    document.querySelector('#appliance_view_form').style.display = 'none';
    document.querySelector('#appliance_view_list').style.display = 'none';
    document.querySelector('#home_view').style.display = 'block';
}