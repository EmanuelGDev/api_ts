export default function App() {

  return (
    <div className="w-full  min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-xl font-medium text-white"> Clientes </h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input 
          type="text" 
          placeholder="Digite seu nome: " 
          className="w-full mb-5 p-2 rounded"/>
          
          <label className="font-medium text-white">Email:</label>
          <input 
          type="Email" 
          placeholder="Digite seu Email: " 
          className="w-full mb-5 p-2 rounded"/>

          <input 
          type="submit"  
          value="Cadastrar" 
          className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"/>

        </form> 


        <section className="flex flex-col">
          <article className="w-full bg-white rounded p-2">
            <p>
              <span className="font-medium">Nome:</span>
              Emanuel
            </p>
            <p>
              <span className="font-medium">Email:</span>
              emanuel@email.com
            </p>
            <p>
              <span className="font-medium">Status:</span>
              Ativo
            </p>

            <button>
              
            </button>
          </article>
        </section>
      </main>
    </div>
  )
}