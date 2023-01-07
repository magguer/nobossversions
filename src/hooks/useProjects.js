import { collection, getDocs, getDoc, addDoc, query, where, doc, deleteDoc, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useContext, useEffect, useState } from "react"
import { db, auth, storage } from '../firebase/firebaseConfig';
import { v4 } from 'uuid';

import { UserContext } from '../context/UserProvider'


const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})
  const { user } = useContext(UserContext)





  // Obtener Proyectos

  const getProjects = async () => {
    try {
      setLoading(prev => ({ ...prev, getProjects: true }))
      const projectsRef = collection(db, "projects")
      const q = query(projectsRef, where("uid", "array-contains", auth.currentUser.uid), orderBy("createTimeProject", "desc"));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProjects(projectsData)
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(prev => ({ ...prev, getProjects: false }))
    }
  }


  useEffect(() => {
    getProjects();
  }, [user])



  // Obtener un Proyecto

  const getProject = async (projectId) => {

    try {
      setLoading(prev => ({ ...prev, getProject: true }))
      const projectRef = doc(db, 'projects', projectId);
      const docSnap = await getDoc(projectRef)
      const projectData = docSnap.data()
      setProject(projectData);

    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(prev => ({ ...prev, getProject: false }))
    }
  }

  // Agregar Proyectos

  const addProject = async (nameProject, rubroProject, imgProject) => {
    try {
      setLoading(prev => ({ ...prev, addProject: true }))
      const newProject = {
        nameProject,
        rubroProject,
        imgProject,
        createTimeProject: serverTimestamp(),
        uid: [auth.currentUser.uid],
        onServicesProject: false,
        onProductsProject: false,
        availableMoney: 0,
        investedMoney: 0,
        billingMoney: 0,
        spentMontey: 0,
      }
      await addDoc(collection(db, 'projects'), newProject)
      setProjects([...projects, newProject])
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    finally {
      setLoading(prev => ({ ...prev, addProject: false }))

    }
  }

  // Subir Logo de Proyecto a Storage

  const addImageProject = async (file) => {
    setLoading(prev => ({ ...prev, addImageProject: true }))
    const storageRef = ref(storage, '/projects/logos/' + v4())
    try {
      await uploadBytes(storageRef, file)
      const urlImageProject = await getDownloadURL(storageRef)
      return urlImageProject
    }
    catch (error) { console.log(error) }
    finally {
      setLoading(prev => ({ ...prev, addImageProject: false }))
    }

  }


  // Subir Banner de Proyecto a Storage

  const addBannerProject = async (file) => {
    setLoading(prev => ({ ...prev, addBannerProject: true }))
    const storageRef = ref(storage, '/projects/banners/' + v4())
    try {
      await uploadBytes(storageRef, file)
      const urlImageProject = await getDownloadURL(storageRef)
      return urlImageProject
    }
    catch (error) { console.log(error) }
    finally {
      setLoading(prev => ({ ...prev, addBannerProject: false }))
    }

  }

  // Editar Proyecto

  const updateProject = async (projectId, newBanner1Project) => {
    setLoading(prev => ({ ...prev, updateProject: true }))
    try {
      const projectRef = doc(db, "projects", projectId);
      await updateDoc(projectRef, { banner1Project: newBanner1Project })
    }
    catch (error) { console.log(error) }
    finally {
      setLoading(prev => ({ ...prev, updateProject: false }))
    }
  }

  // Eliminar Proyecto

  const deleteProject = async (projectId) => {
    try {
      setLoading(prev => ({ ...prev, deleteProject: true }))
      const projectRef = doc(db, 'projects', projectId);
      await deleteDoc(projectRef)
      setProjects(projects.filter(project => project.id !== projectId))

    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    finally {
      setLoading(prev => ({ ...prev, deleteProject: false }))
    }
  }

  return {
    projects, project, error, loading, getProjects, getProject, addProject, deleteProject, addImageProject, addBannerProject, updateProject
  }


}

export default useProjects