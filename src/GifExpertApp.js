import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setcategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //    // categorias.push('Hunter x Hunter');
    //     //setcategories([...categories, 'HunterXHunter']);
    //     setcategories( cats => [...cats, 'HunterXHunter'])
    // }



    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setcategories } />
            <hr/>

            <ol>
                {
                    categories.map( (category) =>(
                         <GifGrid 
                            key={ category }
                            category={ category } />
                    ))   
                }
            </ol>
        </>
    );
}

export default GifExpertApp;