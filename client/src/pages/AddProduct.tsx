import Nav from "../compenents/Nav"
import { Link } from "react-router-dom"
import { upload } from "../assets/assets"
import axios from "axios"
import { useState } from "react"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const AddProduct = () => {

    const [ImageURL,setImageUrl] = useState("")
    const [uploading, setUploading] = useState(false);
    const [name,Setname] = useState("")
    const [price,Setprice] = useState("")
    const [descreption,Setdescreption] = useState("")
    const [category,Setcategory] = useState("")
    const [stock,Setstock] = useState("")
    const [genre,Setgenre] = useState("")

    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BACKEND_URL}/upload`, formData, { 
        headers: { "Content-Type": "multipart/form-data" },
      });

      setImageUrl(res.data.url);
      setUploading(true)
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {

    try {

      const res = await axios.post(`${BACKEND_URL}/product`, { 
        name,price,descreption,category,stock,ImageURL,genre
      });

      console.log(res.data.product)

      Setname("")
      Setprice("")
      Setdescreption("")
      Setcategory("")
      Setstock("")
      Setgenre("")
      setImageUrl("")
      setUploading(false)
    
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Nav></Nav>
    <div className="flex flex-col p-3 gap-y-6">
        
        <p className="text-xs"><Link to={"/admin"}>admin</Link> | <span className="text-gray-500">add</span></p>

        <div className="border-1 self-center border-gray-400 p-4 w-fit flex flex-col gap-y-4  ">

            <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
                <div className="relative flex flex-col border-1 items-center justify-center border-gray-400 h-fit w-70 sm:w-80  ">

                {
                    !uploading && <img  src={upload} width={40} alt=""  className="h-80"/>
                }

                {
                    uploading && <img  src={ImageURL} alt=""  className="h-80"/>
                }
                
                <label htmlFor="image" className="w-full h-full right-0 absolute"></label>
                <input type="file" name="image" id="image" required hidden onChange={handleImage} /><br />
                </div>

                <div className="w-fit flex flex-col gap-y-2">
                    
                    <input placeholder="product name" onChange={(e)=>Setname(e.target.value)} value={name} required className="px-2 py-2  font-semibold rounded-md border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]"></input><br />
                    <input placeholder="price" onChange={(e)=>Setprice(e.target.value)} value={price} type="number" min={0} required className="px-2 py-2  font-semibold rounded-md border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]"></input><br />
                    <input placeholder="stock" onChange={(e)=>Setstock(e.target.value)} value={stock} required min={0} max={1000} type="number" className="px-2 py-2  font-semibold rounded-md border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]"></input><br />
                    <textarea name="descreption" required  onChange={(e)=>Setdescreption(e.target.value)} value={descreption}  placeholder="product descreption" className= "resize-none h-25 px-2 py-2  font-semibold rounded-md border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]"></textarea><br />
                    
                    <div className="flex gap-x-2 ">
                        <select name="category" id="" required onChange={(e)=>Setcategory(e.target.value)} value={category} className="px-1 py-1  w-fit border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]">
                        <option value="" >category</option>
                        <option value="cat 1">cat1</option>
                        <option value="cat 1">cat2</option>
                        <option value="cat 1">cat3</option>
                        </select><br />

                        <select name="genre" id="" required onChange={(e)=>Setgenre(e.target.value)} value={genre} className="px-1 py-1  w-fit border focus:outline-hidden bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#00000075]">
                            <option value="" >genre</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                    </div>
                    
                </div>
            </div>

            <button onClick={handleSubmit} className="bg-gray-400 self-center  cursor-pointer rounded-md p-2 font-semibold text-white w-30">add</button>


        
        </div>
        

    </div>
    </>
  )
}

export default AddProduct