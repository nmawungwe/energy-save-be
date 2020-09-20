document.addEventListener('DOMContentLoaded', function(){

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
            // TVs_num : JSON.stringify({
            //     TVs_num: TVs_num,
            // }),
            // Decoders_num : JSON.stringify({
            //     Decoders_num: Decoders_num,
            // }),
            // SoundSystems_num : JSON.stringify({
            //     SoundSystems_num: SoundSystems_num,
            // }),
            // Lights_num : JSON.stringify({
            //     Lights_num: Lights_num,
            // }),
            // Heaters_num : JSON.stringify({
            //     Heaters_num: Heaters_num,
            // }),
            // Stoves_num : JSON.stringify({
            //     Stoves_num : Stoves_num,
            // }),
            // Fridges_num : JSON.stringify({
            //     Fridges_num: Fridges_num,
            // }),
            // Kettles_num : JSON.stringify({
            //     Kettles_num: Kettles_num,
            // }),
            // Microwaves_num : JSON.stringify({
            //     Microwaves_num: Microwaves_num,
            // }),
            // Computers_num: JSON.stringify({
            //     Computers_num: Computers_num,
            // }),
            // Printers_num : JSON.stringify({
            //     Printers_num: Printers_num,
            // }),
            // Modems_num : JSON.stringify({
            //     Modems_num: Modems_num,
            // }),
            // ElectricBlanket_num  : JSON.stringify({
            //     ElectricBlanket_num: ElectricBlanket_num
            // }),
            // Phones_num : JSON.stringify({
            //     Phones_num: Phones_num,
            // }),
        }).then(response => response.json()).then(result=>{
            console.log(result)
        })
        return false;
    }

})