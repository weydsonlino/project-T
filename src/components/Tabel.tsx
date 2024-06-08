type TabelProps = {
  key: number;
  nome: string;
  preco: number;
  quantidade: number;
  medidas: number[];
};

const Table: React.FC<TabelProps> = ({
  key,
  nome,
  preco,
  quantidade,
  medidas,
}) => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center min-h-screen from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br">
        <div className="flex items-center justify-center min-h-[450px]">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Produto
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Quantidade
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Medidas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">KeyID</td>
                    <td className="py-4 px-6">82926417</td>
                    <td className="py-4 px-6">$4,500.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Maria Garcia</td>
                    <td className="py-4 px-6">55387621</td>
                    <td className="py-4 px-6">$3,150.00</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">James Smith</td>
                    <td className="py-4 px-6">90817264</td>
                    <td className="py-4 px-6">$7,820.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Patricia Brown</td>
                    <td className="py-4 px-6">26483910</td>
                    <td className="py-4 px-6">$1,230.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="py-4 px-6">Ethan Davis</td>
                    <td className="py-4 px-6">64738290</td>
                    <td className="py-4 px-6">$865.00</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-white font-semibold py-10 text-center -mt-20">
        Made with{" "}
        <a
          href="https://chat.openai.com/g/g-8gGyAPc6i-material-tailwind-gpt"
          className="text-white hover:text-gray-800"
          target="_blank"
        >
          MT GPT
        </a>{" "}
        based on{" "}
        <a
          href="https://www.material-tailwind.com"
          className="text-blueGray-500 hover:text-blueGray-800"
          target="_blank"
        >
          {" "}
          Material Tailwind Framework
        </a>
        .
      </div>
    </div>
  );
};

export default Tabel;
