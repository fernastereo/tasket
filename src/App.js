import React from "react";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <DataTable
            columns={[
              { key: "name", label: "Nombre" },
              { key: "description", label: "Descripción" },
            ]}
            rows={[
              { name: "Proyecto 1", description: "Un Proyecto" },
              { name: "Proyecto 2", description: "Otro Proyecto" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
