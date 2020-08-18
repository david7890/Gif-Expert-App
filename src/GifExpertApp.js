import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Anime'])

    const handleAdd = () =>{
        setCategories(c => ['Memes', ...c])
    }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <button onClick= {handleAdd}>Agregar categoria</button>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key ={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
