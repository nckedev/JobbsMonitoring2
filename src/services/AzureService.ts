import {ChainedTokenCredential, DefaultAzureCredential, TokenCredential} from "@azure/identity";
import {Durations, LogsQueryClient} from "@azure/monitor-query"

export default async function  ReadLogs() {
    const cred = new DefaultAzureCredential();
    console.log(cred);

    const logsClient = new LogsQueryClient(cred);

    const workspaceId = "b2719489-2d18-4cc6-b5be-79295a0663f2"

    const res = await logsClient.queryWorkspace(workspaceId, "AppExceptions | limit 1", {duration: Durations.fortyEightHours})
    console.log(res)
}
