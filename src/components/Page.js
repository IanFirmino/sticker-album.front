import CardPhoto from "./CardPhoto";
import styles from "./Page.module.css"

const img = "https://via.placeholder.com/150";

function Page(){

    return (
        <div className={styles.pageContainer}>
            <CardPhoto description="foto 1" name="t" photo={img}/>
            <CardPhoto description="foto 2" name="y"/>
            <CardPhoto description="foto 3" name="t" photo={img}/>
            <CardPhoto description="foto 4" name="y"/>
        </div>
    )

}
export default Page;
