<template>
  <section class="w-full h-full grid grid-cols-[32%_28%_38%] gap-6">
    <div class="w-full h-full flex flex-col gap-4">
      <el-skeleton style="width: 100%; height: 80%" animated>
        <template #template>
          <el-skeleton-item class="rounded-2xl!" style="width: 100%; height: 100%" />
        </template>
      </el-skeleton>

      <el-skeleton style="width: 100%; height: 100%" animated>
        <template #template>
          <el-skeleton-item class="rounded-2xl!" style="width: 100%; height: 100%" />
        </template>
      </el-skeleton>
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <el-skeleton style="width: 100%; height: 100%" animated>
        <template #template>
          <el-skeleton-item class="rounded-2xl!" style="width: 100%; height: 100%" />
        </template>
      </el-skeleton>

      <el-skeleton style="width: 100%; height: 50%" animated>
        <template #template>
          <el-skeleton-item class="rounded-2xl!" style="width: 100%; height: 100%" />
        </template>
      </el-skeleton>
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <el-skeleton style="width: 100%; height: 100%" animated>
        <template #template>
          <el-skeleton-item class="rounded-2xl!" style="width: 100%; height: 100%" />
        </template>
      </el-skeleton>
    </div>
  </section>
</template>
