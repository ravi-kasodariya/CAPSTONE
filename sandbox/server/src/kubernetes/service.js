import { k8sCoreV1Api } from "./config.js";

export const createService = async (sandboxId) => {
    const serviceManifest = {
        metadata: {
            name: `sandbox-service-${sandboxId}`,
            labels: {
                // app: `sandbox`,
                sandboxId: sandboxId
            }
        },
        spec: {
            selector: {
                // app: 'sandbox',
                sandboxId: sandboxId
            },
            ports: [
                {
                    name: "http",
                    protocol: "TCP",
                    port: 80,
                    targetPort: 5173
                },
                {
                    name: "agent-http",
                    protocol: "TCP",
                    port: 3000,
                    targetPort: 3000
                }
            ],
            type: "ClusterIP"
        }
    }

    const response = await k8sCoreV1Api.createNamespacedService({
        namespace: "default",
        body: serviceManifest
    })

    return response;
}

export async function deleteService(sandboxId) {
    const response = await k8sCoreV1Api.deleteNamespacedService({
        namespace: "default",
        name: `sandbox-service-${sandboxId}`
    });
    return response;
}