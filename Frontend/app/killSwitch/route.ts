// Two options POST and GET
// On post requaire killSwitchPassword and compare it against the env variable
// If it matches, set the killSwitch to true
// On get, return the killSwitch status

export const GET = async () => {
    const status = process.env.KILL_SWITCH || "false";
    if (status === "true") {
        return new Response(JSON.stringify({ status: true }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    return new Response(JSON.stringify({ status: false }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const POST = async (request: Request) => {
    const { killSwitchPassword } = await request.json();
    if (!killSwitchPassword) {
        return new Response(JSON.stringify({ error: "Missing killSwitchPassword" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    if (killSwitchPassword !== process.env.KILL_SWITCH_PASSWORD) {
        return new Response(JSON.stringify({ error: "Invalid killSwitchPassword" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    process.env.KILL_SWITCH = "true";
    return new Response(JSON.stringify({ status: true }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}