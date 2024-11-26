export class BackendCaller {
    /**
     * Identificador de la API.
     */
    static #API_URI = 'http://161.35.143.238:8000/gtula';
    static async getAllDestinos() {
        try {
            const response = await fetch(this.#API_URI, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const statusCode = response.status;

            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al obtener la lista de destinos:", error);
            return { statusCode: 500, data: null }; 
        }
    }
    static async getDestinoById(destinoId) {
        try {
            const response = await fetch(`${this.#API_URI}/${destinoId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const statusCode = response.status;
            const data = await response.json();
    
            return { statusCode, data }; 
        } catch (error) {
            console.error("Error al recoger los detalles del destinos:", error);
            return { statusCode: 500, data: null };
        }
    }
    static async postNewDestino(obj) {
        try {
            const response = await fetch(this.#API_URI,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
                });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al crear el destino:", error);
        }
    }
     // PUT (update) a task by ID -> Retorna un objeto plano representando la tarea actualizada en backend.
    static async putDestinoById(destinoId, obj) {
        try {
            const response = await fetch(`${this.#API_URI}/${destinoId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const statusCode = response.status;
            const data = await response.json();
    
            return { statusCode, data }; 
        } catch (error) {
            console.error("Error al actualizar la tarea:", error);
        }
    }

    static async patchDestinoById(destinoId, obj) {
        try {
            const response = await fetch(`${this.#API_URI}/${destinoId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const statusCode = response.status;
            const data = await response.json();
    
            return { statusCode, data }; 
        } catch (error) {
            console.error("Error al actualizar la tarea:", error);
        }
    }
    
    static async deleteDestinoById(destinoId) {
        try {
            const response = await fetch(`${this.#API_URI}/${destinoId}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return { success: true };
        } catch (error) {
            console.error("Error al eliminar el destino:", error);
            return { success: false };
        }
    }
}
export default BackendCaller;