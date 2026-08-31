# x-lang

Website for the x programming language, a strongly-typed systems programming
language inspired by Rust, Swift, and Zig. This repository holds the React
site served at [x-lang.dev](https://x-lang.dev) and the Terraform
configuration that hosts it on AWS.

## Quick start

Dependencies install automatically when a script runs through
[aube](https://aube.jdx.dev).

```sh
git clone git@github.com:afrigon/x-lang.git
cd x-lang
aubr start
```

## Development

```sh
aubr build     # production build into dist/
aubr serve     # preview the production build
aubr lint      # eslint with autofix
aubr prettier  # format the sources
```

## Deployment

The `terraform/` directory defines the hosting stack: an S3 bucket behind a
CloudFront distribution, with the certificate and DNS records in Route 53.
Pushing a tag runs the deploy workflow, which applies the Terraform
configuration, builds the site, syncs `dist/` to the bucket, and invalidates
the CloudFront cache.
