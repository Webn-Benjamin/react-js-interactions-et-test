import React, { useCallback, useEffect, useState } from 'react'

const roles = ['Utilisateur', 'Administrateur', 'Modérateur', 'Comptable', 'Directeur', 'Secrétaire']

function Roles () {
  const [criteria, setCriteria] = useState('')
  const handleChange = useCallback(event => {
    setCriteria(event.target.value)
  }, [])

  const [rolesFiltered, setRolesFiltered] = useState([])
  useEffect(() => {
    setRolesFiltered(roles.filter(role => role.toLowerCase().includes(criteria.toLowerCase())))
  }, [criteria])

  return (
    <div>
      <h1>Liste des rôles</h1>
      <input type="text" onChange={handleChange} value={criteria} placeholder="Rechercher"/>
      {
        rolesFiltered.length
          ? rolesFiltered.map((role, index) => <li key={index}>{role}</li>)
          : <div>Aucune correspondance au critère de recherche.</div>
      }
    </div>
  )
}

export default Roles
