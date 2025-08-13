import { TokenSet } from "openid-client";
import type { LoggerInstance, Profile } from "../../..";
import type { OAuthConfig } from "../../../providers";
import type { InternalOptions } from "../../types";
import type { RequestInternal } from "../..";
import type { Cookie } from "../cookie";
export default function oAuthCallback(params: {
    options: InternalOptions<"oauth">;
    query: RequestInternal["query"];
    body: RequestInternal["body"];
    method: Required<RequestInternal>["method"];
    cookies: RequestInternal["cookies"];
}): Promise<{
    cookies: Cookie[];
    profile?: import("../../types").User | undefined;
    account?: {
        access_token?: string;
        token_type?: string;
        id_token?: string;
        refresh_token?: string;
        expires_in?: number;
        expires_at?: number;
        session_state?: string;
        scope?: string;
        provider: string;
        type: "oauth";
        providerAccountId: string;
    } | undefined;
    OAuthProfile?: Profile | undefined;
}>;
export interface GetProfileParams {
    profile: Profile;
    tokens: TokenSet;
    provider: OAuthConfig<any>;
    logger: LoggerInstance;
}
//# sourceMappingURL=callback.d.ts.map