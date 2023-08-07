import React from 'react'

const ComponentCard = ({ title, body, image, description }) => {
  // const title = props.title;
  // const body = props.body;

  // instead of writing 2 lines of code, destructure
  // const ComponentCard = (props) => {
  // const { title, body } = props;

  // or destructure even further by writing the specific variables in the parentheses
  // const ComponentCard = ({title, body}) => {
  console.log(title, body)
  return (
    <div className='card' style={{ minHeight: '100%'}}>

      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt="Different component cards" />
        </figure>
      </div>

      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>Proper {title}</p>
          <p className='subtitle is-6'>{body}</p>
        </div>
        <div className="content" style={{wordWrap: 'break-word'}}>{description}</div>
      </div>

    </div>
  )
}

export default ComponentCard