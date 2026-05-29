variable "region" {
  type        = string
  description = "The target aws region"
  default     = "us-east-1"
}

variable "domain" {
  type        = string
  description = "The target domain the site will be deployed to"
  default     = "x-lang.dev"
}

variable "zone" {
  type        = string
  description = "The target zone to add records to"
  default     = "x-lang.dev"
}
