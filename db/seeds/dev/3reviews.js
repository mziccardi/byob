exports.seed = function(knex, Promise){
  return knex('reviews').del()
  .then(()=>{
    return Promise.all([
      knex('reviews').insert({
        id:1,
        restaurantId: 1,
        userId:1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:2,
        restaurantId: 2,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:3,
        restaurantId: 3,
        userId: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:4,
        restaurantId: 4,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:5,
        restaurantId: 5,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:6,
        restaurantId: 6,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:7,
        restaurantId: 7,
        userId: 7,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:8,
        restaurantId: 8,
        userId: 8,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:9,
        restaurantId: 9,
        userId: 9,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:10,
        restaurantId: 10,
        userId: 10,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:11,
        restaurantId: 11,
        userId: 11,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:12,
        restaurantId: 12,
        userId: 12,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:13,
        restaurantId: 13,
        userId:13,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:14,
        restaurantId: 14,
        userId:14,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:15,
        restaurantId: 15,
        userId:15,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:16,
        restaurantId: 16,
        userId:16,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:17,
        restaurantId: 17,
        userId:17,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:18,
        restaurantId: 18,
        userId:18,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:19,
        restaurantId: 19,
        userId:19,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:20,
        restaurantId: 20,
        userId:20,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus f9elis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:21,
        restaurantId: 21,
        userId:21,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:22,
        restaurantId: 22,
        userId:22,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:23,
        restaurantId: 23,
        userId: 23,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:24,
        restaurantId:24,
        userId:24,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:25,
        restaurantId: 25,
        userId:25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:26,
        restaurantId: 26,
        userId:26,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:27,
        restaurantId: 27,
        userId:27,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:28,
        restaurantId: 28,
        userId:28,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:29,
        restaurantId: 29,
        userId:29,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        id:30,
        restaurantId: 30,
        userId:30,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      })
    ])
  })
}
