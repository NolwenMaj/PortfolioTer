import Link from "next/link"

export default function ButtonTop (){
    return(
          <Link href="#sectionTop">
            <button className="fixed right-10 bottom-10" >TOP</button>
          </Link>
    )
}
