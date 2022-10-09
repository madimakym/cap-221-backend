.select(["post.slug", "post.title", "tags.slug"])
      .leftJoin("post.tags", "tags")
      .getMany()