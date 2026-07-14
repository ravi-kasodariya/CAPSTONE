import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

redis.on("connect", () => {
    console.log("Connected to Redis");
});

redis.on("error", (err) => {
    console.error("Redis error:", err);
});

export async function refreshTTL(sandboxId) {
    await redis.expire(`sandbox:${sandboxId}`,  60 * 20); // Refresh TTL to 20 minutes
}