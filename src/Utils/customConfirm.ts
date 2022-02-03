import Swal from "sweetalert2";

export default function customConfirm(
    onConfirm:any,
    title: string = "Are You Sure?",
    confirmButtonText: string ="Delete"
){
    // swal.fire({
    //     title,
    //     confirmButtonText,
    //     showCancelButton:true,
    //     confimButtonColor: '#3085d6',
    //     cancleButtonColor: '#d33',        
    // }).then((result: { isConfirmed: any; }) =>{
    //     if(result.isConfirmed){
    //         onConfirm();
    //     }
    // })
    Swal.fire({
        title,
        
        showCancelButton: true,
        confirmButtonText,
        icon:'warning',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            onConfirm();

        }
      })
}