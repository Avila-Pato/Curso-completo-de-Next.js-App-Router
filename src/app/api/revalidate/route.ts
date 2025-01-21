//revalidatePath es una herramienta poderosa para aplicaciones que combinan contenido estático y dinámico, permitiendo mantener datos actualizados de manera eficiente sin necesidad de un despliegue completo.

import type {NextRequest} from "next/server";

import {revalidatePath} from "next/cache";

export async function GET(request: NextRequest) {
  // Obtener la ruta desde los parámetros de la URL
  const path = request.nextUrl.searchParams.get("path") || "/";

  // Revalidar el contenido de la ruta especificada
  revalidatePath(path);

  // Responder con un mensaje de éxito
  return Response.json({success: true});
}

// Ventajas de Usar revalidatePath
// Optimización del Rendimiento:
// Permite mantener las páginas estáticas actualizadas sin necesidad de reconstruir toda la aplicación o reiniciar el servidor.

// Flexibilidad:
// Puedes controlar qué rutas específicas se deben revalidar en función de los cambios en los datos.

// Integración con ISR:
// Aprovecha las capacidades de ISR para crear aplicaciones altamente escalables con contenido que se actualiza bajo demanda.
