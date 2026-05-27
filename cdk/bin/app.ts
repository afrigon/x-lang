import * as cdk from "aws-cdk-lib"
import { XLangStack } from "../lib/xlang.ts"

const app = new cdk.App()

const env = { account: process.env.AWS_ACCOUNT, region: process.env.AWS_REGION }

new XLangStack(app, "XLang", { 
    description: "This stack includes resources needed for the x Programming Languadge website",
    env
})