export async function fetchResource() {
  const response = await fetch('http://127.0.0.1:8000/informacionCasos/Api/v1/denuncia/');
  if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
  }
  return response.json();
}

export async function ResourcesEstadisticasparams() {
  const response = await fetch('')
}