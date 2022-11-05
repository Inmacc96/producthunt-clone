const Error404 = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <style jsx>
        {`
          h1 {
            margin-top: 5rem;
            text-align: center;
          }

          p{
            text-align:center
          }
        `}
      </style>
    </>
  );
};

export default Error404;
