import Swal from "sweetalert2";

export default function customConfirm(
    onConfirm:any,
    title: string = "Are You Sure?",
    confirmButtonText: string ="Delete"
){
    Swal.fire({
      title: "<h5 style='color:black'>" + title + "</h5>",
      text: "You won't be able to revert this!",
        confirmButtonColor: '#4B49AC',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText,
        icon:'warning',
      }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
      })
}