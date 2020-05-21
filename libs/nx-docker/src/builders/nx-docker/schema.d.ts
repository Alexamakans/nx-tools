/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NxDockerBuilderSchema {
  /**
   * Username used to log in to a Docker registry. If not set then no login will occur
   */
  username?: string;
  /**
   * Password or personal access token used to log in to a Docker registry. If not set then no login will occur
   */
  password?: string;
  /**
   * Server address of Docker registry. If not set then will default to Docker Hub
   */
  registry?: string;
  /**
   * Docker repository to tag the image with
   */
  repository: string;
  /**
   * Comma-delimited list of tags. These will be added to the registry/repository to form the image's tags
   */
  tags?: string;
  /**
   * Automatically tags the built image with the git reference as per the readme.
   */
  tag_with_ref?: boolean;
  /**
   * Automatically tags the built image with the git short SHA as per the readme
   */
  tag_with_sha?: boolean;
  /**
   * Path to the build context
   */
  path?: string;
  /**
   * Path to the Dockerfile (Default is '{path}/Dockerfile')
   */
  dockerfile?: string;
  /**
   * Sets the target stage to build
   */
  target?: string;
  /**
   * Always attempt to pull a newer version of the image
   */
  always_pull?: boolean;
  /**
   * Comma-delimited list of build-time variables
   */
  build_args?: string;
  /**
   * Comma-delimited list of images to consider as cache sources
   */
  cache_froms?: string;
  /**
   * Comma-delimited list of labels to add to the built image
   */
  labels?: string;
  /**
   * Adds labels with git repository information to the built image
   */
  add_git_labels?: boolean;
  /**
   * Whether to push the image
   */
  push?: boolean;
  [k: string]: any;
}
