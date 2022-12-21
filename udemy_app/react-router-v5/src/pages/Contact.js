import { useLocation } from "react-router-dom"

export default function Contact() {
  //da gi zeme od query string site parametri
  const queryString = useLocation().search
  //od parametritre da izvadis specificen koj ti treba
  const queryParam = new URLSearchParams(queryString);
  console.log(queryParam.get("name"))
  const name = queryParam.get("name")


  return (
    <div>
      <h2>Contact {name}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo laudantium nemo voluptas cum omnis error voluptate. Nihil numquam ipsum necessitatibus hic odit neque consequuntur dolor. Magni quos ratione iste.</p>
    </div>
  )
}
