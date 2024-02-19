import CardPhoto from "./CardPhoto";
import styles from "./Page.module.css"

function LoadingPage(){

    const img = "https://placehold.jp/3d4070/ffffff/150x150.png";

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageOne}>
                <CardPhoto description="foto 1" name="t" photo={img}/>
                <CardPhoto description="foto 2" name="y" photo={img}/>
                <CardPhoto description="foto 3" name="t" photo={img}/>
                <CardPhoto description="foto 4" name="y" photo={img}/>
            </div>
            <div className={styles.pageTwo}>
                <CardPhoto description="foto 1" name="t" photo={img}/>
                <CardPhoto description="foto 2" name="y" photo={img}/>
                <CardPhoto description="foto 3" name="t" photo={img}/>
                <CardPhoto description="foto 4" name="y" photo={img}/>
            </div>

        </div>
    );

}
export default LoadingPage;