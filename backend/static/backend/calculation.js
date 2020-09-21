document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#check').addEventListener('click', ()=>{

        const user_id = JSON.parse(document.getElementById('user_id').textContent)

        fetch(`/appliances`).then(response=> response.json()).then(appliance_list =>{
            console.log(appliance_list)
        
        if (user_id === appliance_list.user_id) {
            appliance_view_list(
                document.querySelector('.TVs_num').innerHTML=`<p>${appliance_list.TVs_num}</p>`,
                document.querySelector('.TVs_num').innerHTML=`<p>${appliance_list. SoundSystems_num}</p>`

            )
        } else {
            appliance_view_form(
            document.querySelector('form').onsubmit = function(){
    
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
                const ElectricBlanket_num = document.querySelector('#ElectricBlanket_num').value;
                const Phones_num = document.querySelector('#Phones_num').value;
                let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
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
                        ElectricBlanket_num: ElectricBlanket_num,
                        Phones_num: Phones_num
                    })
                }).then(response => response.json()).then(result=>{
                    console.log(result)
                })
                return false;
            })
        }
        })
    })
    home_view()
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