import React from 'react'

function BreadCrum() {
  return (
    <div className='container'>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrum