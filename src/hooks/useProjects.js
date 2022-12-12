import { collection, getDocs, addDoc, query, where, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db, auth } from '../firebase/firebaseConfig';

const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})

  // Obtener Proyectos

  const getProjects = async () => {
    try {
      setLoading(prev => ({ ...prev, getProject: true }))
      const projectsRef = collection(db, "projects")
      const q = query(projectsRef, where("uid", "==", auth.currentUser.uid))
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

  // Agregar Proyectos

  const addProject = async (nameProject, rubroProject, imgProject) => {
    try {
      setLoading(prev => ({ ...prev, addProject: true }))
      const newProject = {
        nameProject,
        rubroProject,
        imgProject,
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

  const deleteProjects = async (projectId) => {
    try {
      setLoading(prev => ({ ...prev, deleteProject: true }))
      const projectRef = doc(db, 'projects', projectId);
      await deleteDoc(projectRef)
      setProjects(projects.filter(project => project.id !==  projectId))

    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    finally {
      setLoading(prev => ({ ...prev, deleteProject: false }))

    }
  }

return {
  projects, error, loading, getProjects, addProject, deleteProjects
}


}

export default useProjects