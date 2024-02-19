import CardPhoto from "./CardPhoto";
import styles from "./Page.module.css"

const img = "https://via.placeholder.com/150";

function Page({ photos }){

    photos.map((photo) => {
        //console.log(photo.id, photo.description, photo.name, photo.img)
    });

    return (
        <div className={styles.pageContainer}>
            <CardPhoto description="foto 1" name="t" photo={img}/>
            <CardPhoto description="foto 2" name="f" photo={img}/>
            <CardPhoto description="foto 3" name="g" photo={img}/>
            <CardPhoto description="foto 4" name="h" photo={img}/>
        </div>
    )

}
export default Page;
