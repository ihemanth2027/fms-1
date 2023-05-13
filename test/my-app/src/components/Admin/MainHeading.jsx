import React from "react";
import axios from "axios";
import {useState} from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
function MainHeading() {

    const temp = "";
    const [content, setContent] = useState(temp);
  
    const handleSearch = (e)=>{
      setContent(e.target.value);
    }

    const sendData = (e) => {
        const searchdata = e.target.value;

        const searchResults = document.getElementById('searchResults');
        let match = searchdata.match(/^\s*[a-zA-Z0-9\s]*$/);
        // let match = searchdata.match(/^[ a-zA-Z0-9 ]*/);
        let match2 = searchdata.match(/\s*/);
        if(match2[0] === searchdata){
            searchResults.innerHTML = '';
            return;
        }
        if(match[0] === searchdata){
          axios.post(`http://localhost:8080/api/getFaculty`, {searchdata})

          .then((res)=>{

              searchResults.innerHTML='';
              if(res.data.searchdata.length < 1){
                searchResults.innerHTML = '<p>Sorry! nothing Found</p>';
                return;
              }else{
                res.data.searchdata.forEach((item, index)=>{
                  if(index > 0) searchResults.innerHTML += '<hr>';
                  // searchResults.innerHTML += `<p>${item.facultyName}</p>`;
                  searchResults.innerHTML += `<p><a href="/personalProfile">${item.facultyName}</a></p>`;
                });
                return;
              }
          
          })
        
          .catch((err)=>{
            console.log(err);
          })
        }
        searchResults.innerHTML = '';

      }

    return (
        <nav className="navbar header">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
               
                    <img src="./images/cvrLogo.png" alt="cvrLogo" className="cvrLogo" />&nbsp;
                  <span className="brand">CVR COLLEGE OF ENGINEERING</span>
                </Link>
                <form className="d-flex navForm" role="search">
                    <input
                        name='search'
                        value={content} onChange={handleSearch} onKeyUp={sendData}
                        className="form-control me-2 searchBar"
                        type="text"
                        placeholder="Search"
                        aria-label="Search" />
                            {/* <div className="seacrchbardiv"> */}
                            <section id='searchResults'>

                            </section>
                            {/* </div> */}
                    {/* <button className="btn btn-outline-secondary " style={{padding:"3.1px 8px 3.1px 8px"}} type="submit">
                        <i className="bi bi-search" style={{color:"#b4bec9"}}></i>
                    </button> */}
                </form>
                
            </div>
        </nav>
    )
}
export default MainHeading;