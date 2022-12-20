import { collection, getDocs, getDoc, addDoc, query, where, doc, deleteDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useState } from "react"
import { db, auth, storage } from '../firebase/firebaseConfig';
import { v4 } from 'uuid';

const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})

  // Obtener Proyectos

  const getProjects = async () => {
    try {
      setLoading(prev => ({ ...prev, getProject: true }))
      const projectsRef = collection(db, "projects")
      const q = query(projectsRef, where("uid", "==", auth.currentUser.uid), orderBy("createTimeProject", "desc"));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProjects(projectsData)
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(prev => ({ ...prev, getProject: false }))
    }

  }

  //Obtener un Proyecto

  const getProject = async (projectId) => {

    try {
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
        uid: auth.currentUser.uid
      }
      const projectRef = await addDoc(collection(db, 'projects'), newProject)
      setProjects([...projects, newProject])
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    finally {
      setLoading(prev => ({ ...prev, addProject: false }))

    }
  }

  //Subir archivos a Storage

  const addImageProject = async (file) => {
    const storageRef = ref(storage, '/projects/logos/' + v4())
    try {
      await uploadBytes(storageRef, file)
      const urlImageProject = await getDownloadURL(storageRef)
      return urlImageProject
    }
    catch (error) { console.log(error) }
  }

  // Eliminar Proyecto

  const deleteProjects = async (projectId) => {
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
    projects, project, error, loading, getProjects, getProject, addProject, deleteProjects, addImageProject
  }


}

export default useProjects