//Imports React
import { useContext, useState } from "react"

// Imports Firestore
import { collection } from "@firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { db } from '../firebase/firebaseConfig'

// Context
import { ProjectContext } from '../context/ProjectProvider'


const useProducts = () => {

    const { idProject } = useContext(ProjectContext)

    const [error, setError] = useState()
    const [loading, setLoading] = useState({})
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})


    // Obtener Productos
    const getProduct = (idProduct) => {
        const query = collection(db, "projects", { idProject }, "products", { idProduct })
        const [product, loading, error] = useCollectionData(query);
    }

    // Agregar un  Producto
    const addProduct = async (nameProductData, skuProductData, descProductData, priceProductData, priceSellerProductDatax, totalCostProductData, stockProductData, path) => {
        try {
            setLoading(prev => ({ ...prev, addProduct: true }))
            const newProduct = {
                nameProductData,
                skuProductData,
                descProductData,
                /* imgProduct, */
                createTimeProject: serverTimestamp(),
                projectId: idProject,
                priceProductData,
                priceSellerProductData,
                totalCostProductData,
                stockProductData,
            }
            const projectPathRef = doc(db, path, newProduct)
            await addDoc(collection(projectPathRef), { newProduct })
            setProducts([...products, newProduct])
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
        finally {
            setLoading(prev => ({ ...prev, addProduct: false }))
        }
    }

    return loading, error, addProduct, getProduct
}

export default useProducts